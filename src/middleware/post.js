const post = async (req, res) => {
    const { dId, password, variables } = req.body;
    console.log(req.body);
  
    try {
      //const usuario = await postUser({ dId, password, variables });
  
      res.status(200).json({ 
        username: "5mhCCz1g9Y", 
        password: "uj4jRrd3Zr", 
        clientId: "device_testid_89681", 
        topic: "64c314be56857449102a9d4b/testid/", 
        variables: [ 
            { 
                "variableFullName": "din0", 
                "variableType": "input", 
                "variable": "aPtCeiVxcp", 
                "variableSendFreq": "30" 
            }, 
            { 
                "variableFullName": "din1", 
                "variableType": "input", 
                "variable": "O2RMRlSUYU", 
                "variableSendFreq": "30" 
            }, 
            { 
                "variableFullName": "din2", 
                "variableType": "input", 
                "variable": "DpG13PisLO", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "din3", 
                "variableType": "input", 
                "variable": "9UaEQR4I36", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "ain0", 
                "variableType": "input", 
                "variable": "NrFMgh03GO", 
                "variableSendFreq": "10" 
            }, 
            { 
                "variableFullName": "ain1", 
                "variableType": "input", 
                "variable": "iSK4MVs6tO", 
                "variableSendFreq": "10" 
            }, 
            { 
                "variableFullName": "ain2", 
                "variableType": "input", 
                "variable": "AM8p6BX0gm", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "ain3", 
                "variableType": "input", 
                "variable": "rgzxwhfl36", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "out0", 
                "variableType": "output", 
                "variable": "inLngKM48P", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "out1", 
                "variableType": "output", 
                "variable": "uX0NxQhNrr", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "out2", 
                "variableType": "output", 
                "variable": "7AJDDkZVrj", 
                "variableSendFreq": 120 
            }, 
            { 
                "variableFullName": "out3", 
                "variableType": "output", 
                "variable": "1QMLeg5CT4", 
                "variableSendFreq": 120 
            } 
        ] 
    });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = post;
