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

export enum RiskLevel {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
}

const partialSchema = z.object({
		firstName: z
			.string()
			.trim()
			.min(1, 'Please provide the first name')
			.regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, 'You can use only letters'),
		lastName: z
			.string()
			.trim()
			.min(1, 'Please provide the last name')
			.regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, 'You can use only letters'),
		age: z.coerce
			.number<number>('Age must be a number').int('Age must be an integer')
			.gte(18, 'Age must be greater or equal 18')
			.lte(100, 'Age must be less than or equal 100'),
		city: z
			.string()
			.trim()
			.min(1, 'Please provide the city')
			.regex(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, 'You can use only letters'),
		insuranceType: z.literal([InsuranceType.Home, InsuranceType.Travel]),
		coverageAmount: z.coerce
			.number<number>('You can use only numbers')
			.gte(1000, 'Coverage must by greater or equal 1000'),
		additionalOptions: z.boolean(),
	})

export const schema = z.union([partialSchema,
	partialSchema.extend({
		insuranceType: z.literal([InsuranceType.Car]),
		vehicleProductionYear: z.coerce
			.number<number>('You can use only numbers')
			.gte(
				1886,
				'Please provide a valid vehicle production year. First car ever produced was in 1886' // https://en.wikipedia.org/wiki/Benz_Patent-Motorwagen - Year of the first car
			)
	}),
])

export type FormInput = z.infer<typeof schema>

export interface FormComponentProps {
	control: Control<FormInput>
	formState: FormState<FormInput>
	watch?: UseFormWatch<FormInput>
}

export interface SummaryComponentProps {
	data: FormInput | null
	riskLevel: RiskLevel | null
	fetchError: boolean | null
}
