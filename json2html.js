export default function json2html(data) {
    // Extract unique keys from all objects in the array to form table headers
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Start table with data-user attribute
    let html = `<table data-user="chinthasowjanya579@gmail.com">\n<thead>\n<tr>`;
    
    // Generate table headers
    columns.forEach(column => {
      html += `<th>${column}</th>`;
    });
    html += `</tr>\n</thead>\n<tbody>\n`;
  
    // Generate table rows
    data.forEach(row => {
      html += `<tr>`;
      columns.forEach(column => {
        html += `<td>${row[column] || ""}</td>`;
      });
      html += `</tr>\n`;
    });
  
    html += `</tbody>\n</table>`;
    return html;
  }
  