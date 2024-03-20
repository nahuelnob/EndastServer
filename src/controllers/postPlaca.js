const { Placa } = require("../db");

const postPlaca = async ({ dId, password, variables }) => {

  const [placa, created] = await Placa.findOrCreate({
    where: { dId: dId },
    defaults: {
      password: password,
      variables: variables,
      topic: `topic/device_/${dId.toString()}/`
    },
  });

  const credenciales = {
    username: "5mhCCz1g9Y",
    password: "uj4jRrd3Zr",
    clientId: "device_testid_89681",
    topic: `topic/device_${dId.toString()}/`,
    variables: [
      {
        variableFullName: "din0",
        variableType: "input",
        variable: "aPtCeiVxcp",
        variableSendFreq: 5,
      },
      {
        variableFullName: "din1",
        variableType: "input",
        variable: "O2RMRlSUYU",
        variableSendFreq: 1,
      },
      {
        variableFullName: "din2",
        variableType: "input",
        variable: "DpG13PisLO",
        variableSendFreq: 1,
      },
      {
        variableFullName: "din3",
        variableType: "input",
        variable: "9UaEQR4I36",
        variableSendFreq: 1,
      },
      {
        variableFullName: "ain0",
        variableType: "input",
        variable: "NrFMgh03GO",
        variableSendFreq: 1,
      },
      {
        variableFullName: "ain1",
        variableType: "input",
        variable: "iSK4MVs6tO",
        variableSendFreq: 1,
      },
      {
        variableFullName: "ain2",
        variableType: "input",
        variable: "AM8p6BX0gm",
        variableSendFreq: 1,
      },
      {
        variableFullName: "ain3",
        variableType: "input",
        variable: "rgzxwhfl36",
        variableSendFreq: 1,
      },
      {
        variableFullName: "out0",
        variableType: "output",
        variable: "inLngKM48P",
        variableSendFreq: 120,
      },
      {
        variableFullName: "out1",
        variableType: "output",
        variable: "uX0NxQhNrr",
        variableSendFreq: 120,
      },
      {
        variableFullName: "out2",
        variableType: "output",
        variable: "7AJDDkZVrj",
        variableSendFreq: 120,
      },
      {
        variableFullName: "out3",
        variableType: "output",
        variable: "1QMLeg5CT4",
        variableSendFreq: 120,
      },
    ],
  };
  if (!created && (placa.dId === dId && placa.password === password)) return credenciales
  if (!created && (placa.dId !== dId || placa.password !== password)) throw new Error ('Error')
  return credenciales;
};

module.exports = postPlaca;
