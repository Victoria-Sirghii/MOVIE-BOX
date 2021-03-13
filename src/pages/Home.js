import React, {useState} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult ] = useState(null);
  const [searchOption, setSearchOption ] = useState('shows');

  const isShowSearch = searchOption === 'shows'

  const onSearch = () =>{
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResult(result)
      console.log(result)
    })
}

  const onInputChange = (ev) => {
    setInput(ev.target.value)
  }
  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch()
    }
  }
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value)
  }
  console.log(searchOption)
  const renderResults= () => {
    if(result && result.length === 0){
      return <div>No results</div>
    }

    if(result && result.length > 0){
      return (
        result[0].show ? result.map(item => (
          <div key={item.show.id}>{item.show.name}</div>
        )) : result.map(item => (
          <div key={item.person.id}>{item.person.name}</div>
        ))
      )
    }

    return null;
  }

  return (
    <MainPageLayout>
      <input 
        type="text" 
        placeholder="Search for something"
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}
      />
      <div>
        <label htmlFor="shows-search">
          Shows
          <input 
            id="shows-search"
            type="radio" 
            value="shows" 
            checked={isShowSearch}
            onChange={onRadioChange}/>
        </label>

        <label htmlFor="actors-search">
          Actors
          <input 
            id="actors-search" 
            type="radio" 
            value="people" 
            onChange={onRadioChange}
            checked={!isShowSearch}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home
