import React, {useState, useCallback} from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import ActorGrid from '../components/actors/ActorGrid';
import {useLastQuery } from '../misc/custom-hooks';
import {SearchInput, RadioInputsWrapper, SearchButtonWrapper} from './Home.styled';
import CustomRadio from '../components/CustomRadio';

const mystyle = {
  display: "flex",
  justifyContent: "center"
};

const renderResults = (result) => {
  if(result && result.length === 0){
    return <div style={mystyle}>No results</div>
  }

  if(result && result.length > 0){
    return (
      result[0].show ? 
        <ShowGrid data={result} /> : <ActorGrid data={result} />
    );
    }
    return null;
}

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [result, setResult ] = useState(null);
  const [searchOption, setSearchOption ] = useState('shows');

  const isShowSearch = searchOption === 'shows'

  const onSearch = () =>{
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResult(result)
    })
}
  const onInputChange = useCallback((ev) => {
    setInput(ev.target.value)
  }, [setInput]);

  const onKeyDown = (ev) => {
    if(ev.keyCode === 13){
      onSearch()
    }
  }
  const onRadioChange = useCallback(
    (ev) => {
      setSearchOption(ev.target.value)
    }, []);

  return (
    <MainPageLayout>
      <SearchInput 
        type="text" 
        placeholder="Search for something"
        onChange={onInputChange} 
        onKeyDown={onKeyDown} 
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows" 
            id="shows-search"
            value="shows" 
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
        <CustomRadio
            label="Actors" 
            id="actors-search"
            value="people" 
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults(result)}
    </MainPageLayout>
  )
}

export default Home;
