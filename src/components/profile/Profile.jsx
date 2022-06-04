import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile;