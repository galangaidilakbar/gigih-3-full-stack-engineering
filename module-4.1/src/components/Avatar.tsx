const user = {
    name: "Github Octocat",
    avatar: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
}

const Avatar = () => {
    return (
        <div className="flex border border-gray-200 rounded-lg p-4 items-center justify-center w-56 gap-x-3">
            <div className="w-1/3">
                <img src={user.avatar} alt={user.name} className="h-14 w-14 rounded-full object-cover"/>
            </div>
            <p className="w-2/3">{user.name}</p>
        </div>
    )
}

export default Avatar