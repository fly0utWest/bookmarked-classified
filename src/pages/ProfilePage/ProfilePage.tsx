import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../utils';
import { User } from '../../types';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileListCounter from './ProfileListCounter/ProfileListCounter';
import ProfileFavorites from './ProfileFavorites/ProfileFavorites';
import ProfileWatchlist from './ProfileWatchlist/ProfileWatchlist';
import ProfileReviews from './ProfileReviews/ProfileReviews';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [userData, setUserData] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const baseUrl: string = `http://localhost:8080/users/${id}`;
    setIsLoading(true);
    fetchUser(baseUrl)
      .then((data) => {
        setUserData(data);
      })
      .catch((error: Error) => {
        console.error(`Fetching error: ${error.message}`);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });;

  }, [id]);

 if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage code={204} description='данные не были получены' />;
  }
  
  return (
    <div className='profile'>
      <ProfileBackground />
      <div className='profile-page'>
        <div className='profile-page-header'>
          <ProfileAvatar />
          <div className='container profile-page-header__container'>
            <p className='profile-page-header__name'>{userData?.login}</p>
            <p className='profile-page-header__bio'>{userData?.bio}</p>
          </div>
          <ProfileListCounter favoritesCount={userData?.favourites} watchlistCount={userData?.watchLater}/>
        </div>
        <div className='profile-page__flex'>
          <div>
            <div className='container profile-page__container'>
              <h2>Любимые фильмы</h2>
              <Link to='/user/:id/favorites/'>Показать все</Link>
            </div>
            <ProfileFavorites favourites={userData?.favourites}/>
            <hr />
            <div className='container profile-page__container'>
              <h2>Смотреть позже</h2>
              <Link to='/user/:id/favorites/'>Показать все</Link>
            </div>
            <ProfileWatchlist watchLater={userData?.watchLater} />
            <hr />
            <div className='container profile-page__container'></div>
          </div>
          <ProfileReviews reviews={userData?.reviews}/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
