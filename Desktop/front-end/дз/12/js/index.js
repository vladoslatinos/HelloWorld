var notification = [ 
 
 { 
  date: '31/07/2019', 
  text: 'Some message here', 
  source: 'facebook' 
 }, 
 { 
  date: '21/07/2019', 
  text: 'Some message here', 
  source: 'facebook' 
 }, 
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'youtube' 
 }, 
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'tiktok' 
 }, 
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'youtube' 
 }, 
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'tiktok' 
 },
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'youtube' 
 }, 
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'tiktok' 
 },
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'youtube' 
 }, 
 { 
  date: '22/07/2019', 
  text: 'Some message here', 
  source: 'youtube' 
 }, 
 { 
  date: '01/07/2019', 
  text: 'Some message here', 
  source: 'youtube' 
 }, 
{ 
  date: '31/07/2019', 
  text: 'Some message here', 
  source: 'facebook' 
 }, 
 
];
function groupAndSortNotifications(notifications) { 
  
  const groupedNotifications = notifications.reduce((acc, curr) => { 
    const source = curr.source; 
    if (!acc[source]) { 
      acc[source] = []; 
    } 
    acc[source].push(curr); 
    return acc; 
  }, {}); 
   
  
  
   
  return groupedNotifications; 
}
console.log(groupAndSortNotifications(notification));
