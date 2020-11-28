module.exports = async (ctx, next) => {
	if (!ctx.request.query["post.author"]) {
		return ctx.unauthorized("Please specify the post author");
	}

	const targetUser = String(ctx.request.query["post.author"]);
	const loggedInUser = String(ctx.state.user.id);

	if (targetUser === loggedInUser) {
		return next();
	} else {
		return ctx.unauthorized("Target user is different from logged In User");
	}
};
