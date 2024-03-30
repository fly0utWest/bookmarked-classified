import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { FilmData } from '../../types'
import config from '../../utils/utils'
import SlicedList from '../../components/SlicedList/SlicedList'
import Loading from '../../components/Loading/Loading'
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage'

const CataloguePage = () => {
  const {data: films, isLoading, error} = useFetch<FilmData[]>(`${config.BACK_API}/movies`);

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error}/>
    }

    return (
    <div className='catalogue'>
        <h1 className='catalogue-heading'>Каталог</h1>
        <section className='catalogue-section'>
        {films && <SlicedList films={films} linkClassModifier='catalogue-section__film-link'/>}
        </section>
    </div>
  )
}

export default CataloguePage