// parse a long string representing email data
// return a summary statement comprising the following:
// The number of email messages found in the string
// The date range of the email messages

// helper method, extractDates
// str.match(/(\d\d)-(\d\d)-(\d{4})/g)
// map to create array of Date objects
  // return new Date(dateStr)

// sort Date objects

// first and last in the array comprise the range

// split the messages at the delimiter: 
// let messages = emailData.split('##||##');
// store the length of the messages array as messageCount

function getDateRange(emailData) {
  let dates = emailData.match(/(\d\d)-(\d\d)-(\d{4})/g);
  console.log(dates);
  dates = dates.map(date => new Date(date)).sort((a, b) => a - b);
  
  let firstDate = dates.shift().toDateString();
  let lastDate = dates.pop().toDateString();
  return [firstDate, lastDate];
}

function mailCount(emailData) {
  let firstDate, lastDate;
  [firstDate, lastDate] = getDateRange(emailData);
  let messageCount = emailData.split('##||##').length;

  console.log(`Count of Email: ${messageCount}`);
  console.log(`Date Range: ${firstDate} - ${lastDate}`);
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016