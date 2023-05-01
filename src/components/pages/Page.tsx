import React from 'react';
import {PagesType} from '../../dataState/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PagePropsType = {
  pages: Array<PagesType>
}

const Page = (props: PagePropsType) => {
  const params = useParams()
  const id = Number(params.id);
  if (id >= props.pages.length) {
    return <Error404 />;
  }
  return (
    <div>
      <div>
        {props.pages[Number(params.id)].heading}:
      </div>
      <div>
        {props.pages[Number(params.id)].about}
      </div>

    </div>
  )


};

export default Page;