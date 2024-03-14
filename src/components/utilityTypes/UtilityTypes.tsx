import Awaited from './eachTypes/Awaited'
import ConstructorParameters from './eachTypes/ConstructorParameters'
import Exclude from './eachTypes/Exclude'
import Extract from './eachTypes/Extract'
import InstanceType from './eachTypes/InstanceType'
import Intrinsic from './eachTypes/Intrinsic'
import NonNullable from './eachTypes/NonNullable'
import Omit from './eachTypes/Omit'
import OmitThisParameter from './eachTypes/OmitThisParameter'
import Parameters from './eachTypes/Parameters'
import Partial from './eachTypes/Partial'
import Pick from './eachTypes/Pick'
import Readonly from './eachTypes/Readonly'
import Record from './eachTypes/Record'
import Required from './eachTypes/Required'
import ReturnType from './eachTypes/ReturnType'
import ThisParameterType from './eachTypes/ThisParameterType'
import ThisType from './eachTypes/ThisType'

export default function UtilityTypes(): JSX.Element {
	return (
		<>
			<Awaited />
			<Partial />
			<Required />
			<Readonly />
			<Record />
			<Pick />
			<Omit />
			<Exclude />
			<Extract />
			<NonNullable />
			<Parameters />
			<ConstructorParameters />
			<ReturnType />
			<InstanceType />
			<ThisParameterType />
			<OmitThisParameter />
			<ThisType />
			<Intrinsic />
		</>
	)
}
