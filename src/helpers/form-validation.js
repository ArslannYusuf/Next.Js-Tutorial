export const transformYupErrors = (errors) => {
	const errObject = {};

	errors.forEach((error) => {
		errObject[error.path] = error.message;
	});

	return {
		ok: false,
		message: "Something went wrong.",
		errors: errObject,
	};
};