

const ReviewCard = ({ review }) => {
    return (
        <div className="max-w-sm rounded-[28px] bg-base-100 px-9 py-10 shadow-sm">

            {/* Quote Icon */}
            <div className="mb-5 text-6xl font-bold leading-none text-cyan-200">
                ”
            </div>

            {/* Review */}
            <p className="text-[17px] leading-7 text-gray-500">
                {review.review}
            </p>

            {/* Dashed Divider */}
            <div className="my-7 border-t-2 border-dashed border-cyan-700"></div>

            {/* User Info */}
            <div className="flex items-center gap-5">

                {/* Avatar */}
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img
                            src={review.user_photoURL}
                            alt={review.userName}
                        />
                    </div>
                </div>

                {/* Name + Email */}
                <div>
                    <h3 className="text-xl font-bold text-cyan-950">
                        {review.userName}
                    </h3>

                    <p className="mt-1 text-base text-gray-500">
                        {review.user_email}
                    </p>
                </div>
            </div>

            {/* Rating + Date */}
            <div className="mt-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Rating</span>

                    <span className="font-semibold text-cyan-900">
                        {review.ratings}/5
                    </span>
                </div>

                <span className="text-sm text-gray-400">
                    {new Date(review.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </span>
            </div>
        </div>
    );
};

export default ReviewCard;