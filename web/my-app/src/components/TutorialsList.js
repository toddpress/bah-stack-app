import { useDispatch, useSelector } from 'react-redux';

import { fetchTutorials } from './../actions/tutorial.actions'
import { useEffect } from 'react'

export default function TutorialsList() {
  const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTutorials())
  }, [dispatch])
  return (
    <div>
      { tutorials &&
        tutorials.map((t, i) => (
          <pre style={{textAlign: 'left', paddingLeft: '1.6rem'}} key={i}>{JSON.stringify(t, null, 4)}</pre>
        ))
      }
    </div>
  );
}
