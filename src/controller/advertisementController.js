const advertisementModel = require('../model/advertisement')
exports.index = (request, response) => {
  advertisementModel.find({})
    .then(data => {
      response.status(200).send(data)
    })
    .catch(error => {
      response.status(400).send(error)
    })
}

exports.create = (request, response) => {
  const advertisement = advertisementModel(request.body)
  advertisement.save()
    .then(data => {
      response.status(201).send({ message: 'Anúncio cadastrado com sucesso!'})
    })
    .catch(error => {
      response.status(400).send({ message: 'Falha ao cadastrar anúncio\n', error})
    }) 
}

exports.update = (request, response) => {
  const id = request.params.id
  advertisementModel.findByIdAndUpdate(id, request.body, {
    new: true
  })
  .then(data => {
    response.status(200).send({message: 'Anúncio atualizado com sucesso!\n', data})
  })
  .catch(error => {
     response.status(400).send({message: 'Falha ao atualizar anúncio\n', error})
  })
}