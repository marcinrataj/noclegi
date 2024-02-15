import Layout from '../Layout/Layout';

const withClass = (WrappedComponent, className) => {
  
	return (props) => {
		return (
			<div className={className}>
				<WrappedComponent {...props}/>
			</div>
		);
	};
};

export default withClass;
