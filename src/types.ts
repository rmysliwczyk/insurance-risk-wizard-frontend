import * as z from 'zod'
import {
	type Control,
	type FormState,
	type UseFormWatch,
} from 'react-hook-form'

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

export const schema = z
	.object({
		firstName: z.string().min(1, 'Please provide the first name'),
		lastName: z.string().min(1, 'Please provide the last name'),
		age: z.coerce
			.number<number>('Age must be a number')
			.gte(18, 'Age must be greater or equal 18')
			.lte(100, 'Age must be less than or equal 100'),
		city: z.string().min(1, 'Please provide the city'),
		insuranceType: z.literal(Object.values(InsuranceType)),
		vehicleProductionYear: z.coerce.number<number>(
			'You can use only numbers'
		),
		coverageAmount: z.coerce
			.number<number>('You can use only numbers')
			.gte(1000, 'Coverage must by greater or equal 1000'),
		additionalOptions: z.boolean(),
	})
	.superRefine((data, ctx) => {
		if (
			data.insuranceType == InsuranceType.Car &&
			data.vehicleProductionYear <= 0
		) {
			ctx.addIssue({
				code: 'custom',
				path: ['vehicleProductionYear'],
				message: 'Please provide a valid vehicle production year',
			})
		}
	})

export interface FormInput extends z.infer<typeof schema> {}
export interface FormComponentProps {
	control: Control<FormInput>
	formState: FormState<FormInput>
	watch?: UseFormWatch<FormInput>
}
