const personService = require("../service/person")

class PersonController {
	async createPerson(req, res) {
		try {
			const id = await personService.createPerson(req.body)
			res.status(201).json({ id })
		} catch (error) {
			res.status(500).json({ error })
		}
	}
}

module.exports = new PersonController()
