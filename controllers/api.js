exports.getMyData = (req, res, next) => {
  const ip = req.ip
  const lang = req.get('accept-language');
  const soft = req.get('user-agent');
  res.json({
    "ip": ip,
    "language": lang,
    "software": soft
});
}