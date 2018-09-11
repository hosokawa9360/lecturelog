
function doGet() {
// doGet():GETリクエストがきたら、index.htmlを返す。
//  javascriptとスタイルシートを外だしするために、HtmlService.createTemplateFromFile()を使用する。 
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('gas入力フォームサンプル');
}

//  registerSSByFormData():入力フォームデータを受け取って、スプレッドシートを更新する。
function registerSSByFormData(data) {

  Logger.log("data = %s", data);
  
//lecturelogシート　https://docs.google.com/spreadsheets/d/1yAoG7qbuwAV1cHHYVTzX7QUxZTsQKCXACH2Ydpd_H-4/edit#gid=0
//  var datasheet = SpreadsheetApp.openById('送信データを登録するスプレッドシートのID').getSheetByName('シート名');
  var datasheet = SpreadsheetApp.openById('1yAoG7qbuwAV1cHHYVTzX7QUxZTsQKCXACH2Ydpd_H-4').getSheetByName('log');
  var now = new Date();

  var i = datasheet.getLastRow() + 1;
  datasheet.getRange(i,  1).setValue(data[ 1]);
  datasheet.getRange(i,  2).setValue(data[ 2]);
  datasheet.getRange(i,  3).setValue(data[ 3]);
  datasheet.getRange(i,  4).setValue(data[ 4]);
  datasheet.getRange(i,  5).setValue(data[ 5]);
  datasheet.getRange(i,  6).setValue(data[ 6]);
  datasheet.getRange(i,  7).setValue(data[ 7]);
  datasheet.getRange(i,  8).setValue(data[ 8]);
  datasheet.getRange(i,  9).setValue(data[ 9]);
  datasheet.getRange(i, 10).setValue(data[10]);
  datasheet.getRange(i, 11).setValue(data[11]);
  datasheet.getRange(i,  12).setValue(Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss'));
  result = true;

  return {data: true};
}

function getSelectListFromMasterSS() {
  var selectList = [];

  // マスタデータシートを取得
  //https://docs.google.com/spreadsheets/d/1uhhjTO3OVrb481oAnVmAxI1lFR0XNPAnSSe0bxpNZxU/edit#gid=0
  var datasheet = SpreadsheetApp.openById('1uhhjTO3OVrb481oAnVmAxI1lFR0XNPAnSSe0bxpNZxU').getSheetByName('faculty');
  // B列2行目のデータからB列の最終行までを取得 
  var lastRow = datasheet.getRange("B:B").getValues().filter(String).length - 1;
  Logger.log("lastRow = %s", lastRow);
  // B列2行目のデータからB列の最終行までを1列だけ取得 
  selectList = datasheet.getRange(2, 2, lastRow, 1).getValues();
  Logger.log("selectList = %s", selectList); 

  return {data: selectList};
}

//function doGet() {  
//  var html = HtmlService.createTemplateFromFile('reportinput');  
//  return html.evaluate();  
//}  
//リストボックス表示
//function doGet() {
//  var app = UiApp.createApplication();
//  var wrapper = app.createVerticalPanel(); 
// 
//  //スプレッドシートから取得した都道府県レコードをリストボックスに追加
//  var ss  = SpreadsheetApp.openById('1uhhjTO3OVrb481oAnVmAxI1lFR0XNPAnSSe0bxpNZxU');
//  //https://docs.google.com/spreadsheets/d/1uhhjTO3OVrb481oAnVmAxI1lFR0XNPAnSSe0bxpNZxU/edit#gid=0
//  var sheet = ss.getSheetByName('faculty');
//  var records = sheet.getRange(1, 1, sheet.getLastRow(), 2).getValues();   
//  var list = app.createListBox().setName('faculty');
//  
//}
