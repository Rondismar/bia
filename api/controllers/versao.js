module.exports = () => {
  const controller = {};

  controller.get = async (req, res) => {
    res.json({
      app: "BIA",
      versao: process.env.VERSAO_API || "4.3.0",
    });
  };

  return controller;
};
