import React from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../../types';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileAvatar from '../../components/ui/ProfileAvatar/ProfileAvatar';
import ProfileListCounter from './ProfileListCounter/ProfileListCounter';
import ProfileList from './ProfileList/ProfileList';
import ProfileReviews from './ProfileReviews/ProfileReviews';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import config from '../../utils/utils';

const ProfilePage: React.FC = () => {
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
          <ProfileAvatar
            username={userData?.login}
            classModifier='profile-page-header__profile-avatar'
          />
          <div className='container profile-page-header__container'>
            <p className='profile-page-header__name'>{userData?.login}</p>
            <p className='profile-page-header__bio'>
              {userData?.bio === '' ? 'Биография не указана.' : userData?.bio}
            </p>
          </div>
          <ProfileListCounter
            favoritesCount={userData?.favourites}
            watchlistCount={userData?.watchLater}
            login={userData?.login}
          />
        </div>
        <div className='profile-page__flex'>
          <div>
            <div className='container profile-page__container'>
              <h2>Любимые фильмы</h2>
              {userData?.favourites.length === 0 ? null : (
                <Link to={`/user/${userData?.login}/favourites/`}>
                  Показать все
                </Link>
              )}
            </div>
            <ProfileList listArray={userData?.favourites} />
            <hr />
            <div className='container profile-page__container'>
              <h2>Смотреть позже</h2>
              {userData?.watchLater.length === 0 ? null : (
                <Link to={`/user/${userData?.login}/watchlater`}>
                  Показать все
                </Link>
              )}
            </div>
            <ProfileList listArray={userData?.watchLater} />
            <hr />
            <div className='container profile-page__container'>
              <h2>Просмотренные</h2>
              {userData?.watched.length === 0 ? null : (
                <Link to={`/user/${userData?.login}/watched`}>
                  Показать все
                </Link>
              )}
            </div>
            <ProfileList listArray={userData?.watched} />
            <hr />
          </div>
          <ProfileReviews reviews={userData?.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
