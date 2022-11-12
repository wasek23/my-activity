import './Activity.css';

const Activity = ({ activity, onAddToSidebar }) => {
	const { id, img, name, age, time, description } = activity;

	return <div className='activity'>
		<figure>
			<img src={img} alt={name} />
		</figure>

		<div className='content'>
			<h2 className='name'>{name}</h2>

			<p className='description'>{description}</p>

			<p className='age'>For Age: {age}</p>
			<p className='time'>Time Required: {time}M</p>
		</div>

		<button className='btn' onClick={() => onAddToSidebar(id)}>Add To List</button>
	</div>
}
export default Activity;