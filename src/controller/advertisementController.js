exports.index = (request, response) => {
  return response.status(200).send({
    id: 1,
    name: 'Capgemine Programa de Formação',
    client: 'Capgemine',
    dateStart: '22/04/2021',
    dataExpirated: '22/05/2021',
    investiment: 2.500
  })
}

exports.create = (request, response) => {
  const {name, client, dataStart, dataExpirated, investiment} = request.body
  return response.status(201).json({name, client})
}
