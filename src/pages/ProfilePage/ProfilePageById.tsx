import React from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileAvatar from './ProfileAvatar/ProfileAvatar';
import ProfileListCounter from './ProfileListCounter/ProfileListCounter';
import ProfileFavorites from './ProfileFavorites/ProfileFavorites';
import ProfileWatchlist from './ProfileWatchlist/ProfileWatchlist';
import ProfileWatched from './ProfileWatched/ProfileWatched';
import ProfileReviews from './ProfileReviews/ProfileReviews';
import { useFetch } from '../../hooks';
import { Link } from 'react-router-dom';
import config from '../../utils';

const ProfilePageById: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const baseUrl: string = `${config.BACK_API}/users`;

  const { data: userData, isLoading, error } = useFetch<User>(baseUrl, id);

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
          <ProfileListCounter
            favoritesCount={userData?.favourites}
            watchlistCount={userData?.watchLater}
          />
        </div>
        <div className='profile-page__flex'>
          <div>
            <div className='container profile-page__container'>
              <h2>Любимые фильмы</h2>
              <Link to='/user/:id/favorites/'>Показать все</Link>
            </div>
            <ProfileFavorites favourites={userData?.favourites} />
            <hr />
            <div className='container profile-page__container'>
              <h2>Смотреть позже</h2>
              <Link to='/user/:id/favorites/'>Показать все</Link>
            </div>
            <ProfileWatchlist watchLater={userData?.watchLater} />
            <hr />
            <div className='container profile-page__container'>
              <h2>Просмотренные</h2>
              <Link to='/user/:id/watched/'>Показать все</Link>
            </div>
            <ProfileWatched watched={userData?.watched}/>
            <hr />
          </div>
          <ProfileReviews reviews={userData?.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePageById;
