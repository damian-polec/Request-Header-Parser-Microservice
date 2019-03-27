exports.getMyData = (req, res, next) => {
  const ip = req.ip
  console.log(ip);
  res.json({"ip": ip});
}