import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import css from '../Filters/Filter.module.css';
import { selectSelectedAccountById } from '../../redux/accounts/accountsSelector';
import Select from 'react-select';

export const FiltersProfile = ({ onChangeSetMarket, onSelectSetCountry, market, country }) => {
    const profilesByAccountId = useSelector(selectSelectedAccountById);

    const allCountries = profilesByAccountId.map(item => item.country)
        .filter((country, index, array) => array.indexOf(country) === index)
        .sort((a, b) => a.localeCompare(b));
    
    const allCountriesOptions = [{ value: 'all', label: 'All country' }];
    for (let i = 0; i < allCountries.length; i++) {
        allCountriesOptions.push({ value: allCountries[i].toLowerCase(), label: allCountries[i] });
    };
  
    return (
        <div className={css.wrapFilters}>
            <div className="mb-3">
                <label
                    htmlFor="textInput"
                    className="form-label">
                    Filter by Country
                </label>
                <Select
                    id="textInput"
                    onChange={onSelectSetCountry}
                    options={allCountriesOptions}
                    isSearchable
                    placeholder='Enter the Country'
                    value={country}
                />
            </div>
            
            <div className="mb-3">
                <label
                    htmlFor="textInput"
                    className="form-label">
                    Filter by MarketPlace
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="textInput"
                    value={market}
                    onChange={event => onChangeSetMarket(event.currentTarget.value)}
                    placeholder="Write MarketPlace"
                />
            </div>
        </div>
    )
};

