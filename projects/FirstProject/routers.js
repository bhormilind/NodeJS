const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html><head><title>Test Response</title></head>');
    res.write('<body>');
    res.write('<h1> Enter the input : </h1>');
    res.write('<form action="/message" method="POST"');
    res.write('<label for="message">Enter the Message : </label>');
    res.write('<input type="text" name="message">');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const data = [];

    req.on('data', (chunk) => {
      data.push(chunk);
    });

    req.on('end', () => {
      const strData = Buffer.concat(data).toString();

      console.log('Received Data : ' + strData);

      fs.writeFile('Message.txt', strData.split('=')[1], (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-type', 'text/html');
  res.write('<html><head><title>Test Response</title></head>');
  res.write('<body>');
  res.write('<h1> Test Response </h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
};


module.exports = requestHandler;
