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

export interface InsuranceDetailsFormProps {
	insuranceType: InsuranceType
	setInsuranceType: React.Dispatch<React.SetStateAction<InsuranceType>>
}
