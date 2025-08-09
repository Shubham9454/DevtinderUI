const ProfileCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photoURL, skills } = user;

  return (
    <div className="card bg-base-200 w-96 shadow-sm">
      <figure>
        <img className="h-full w-full object-cover" src={photoURL} alt="Photo" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <h3 className="">{age + ", " + gender}</h3>}
        </div>

        <p>{about}</p>
        
      </div>
    </div>
  );
};

export default ProfileCard;
