import * as yup from 'yup'
import { type Control, type UseFormWatch } from 'react-hook-form'

export enum FormStep {
	CustomerData = 1,
	InsuranceDetails,
	Summary,
}

export enum InsuranceType {
	Car = 'Car',
	Home = 'Home',
	Travel = 'Travel',
}

export const schema = yup.object({
	firstName: yup.string(),
	lastName: yup.string(),
	age: yup.number(),
	city: yup.string(),
	insuranceType: yup
		.mixed<InsuranceType>()
		.oneOf(Object.values(InsuranceType)),
	vehicleProductionYear: yup.number(),
	coverageAmount: yup.number(),
	additionalOptions: yup.boolean(),
})

export interface FormInput extends yup.InferType<typeof schema> {}
export interface FormComponentProps {
	control: Control<FormInput>
	watch?: UseFormWatch<FormInput>
}
