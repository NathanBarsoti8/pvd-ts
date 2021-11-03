import { Schema, model } from 'mongoose'

const address = new Schema({
	typeAddress: { type: String, required: true },
	zipCode: { type: String, required: true },
	country: { type: String, required: true },
	state: { type: String, required: true },
	city: { type: String, required: true },
	street: { type: String, required: true },
	number: { type: String, required: true },
	complement: { type: String, required: true }
})

const contact = new Schema({
	fullName: { type: String, required: true },
	telephoneNumber: { type: String, required: true },
	emailAddress: { type: String, required: true },
	department: { type: String, required: true }
})

const company = new Schema({
	companyId: { type: String, required: true },
	companyName: { type: String, required: true }
})

const providers = new Schema({
	parentCnpjNumber: { type: String, required: true },
	cnpjNumber: { type: String, required: true },
	providerName: { type: String, required: true },
	fantasyName: { type: String, required: true },
	stateRegistration: { type: String, required: false },
	municipalRegistration: { type: String, required: false },
	addresses: [address],
	contacts: [contact],
	companies: [company],
	active: { type: String, required: false },
	skusCount: { type: String, required: false },
	createdAt: { type: Date, required: false },
	updatedAt: { type: Date, required: false }
}, { collection: 'providers', versionKey: false })

export default model('providers', providers)
