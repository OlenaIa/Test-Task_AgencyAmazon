import 'bootstrap/dist/css/bootstrap.min.css';
import css from '../Filters/Filter.module.css';
import Select from 'react-select';

export const FiltersCompaigns = ({ sort, onSort}) => {
    const options = [
        { value: 'all', label: 'All compaigns' },
        { value: 'decrease price', label: 'From higher to lower price' },
        { value: 'increase price', label: 'From lower to higher price' },
        { value: 'decrease click', label: 'From higher to lower clicks' },
        { value: 'increase click', label: 'From lower to higher clicks' }
    ];
  
    return (
        <div className={css.wrapFilters}>
            <div className="mb-3">
                <label
                    htmlFor="textInput"
                    className="form-label">
                    Sort by
                </label>
                <Select
                    id="textInput"
                    onChange={onSort}
                    options={options}
                    isSearchable
                    placeholder='Enter the Country'
                    value={sort}
                />
            </div>
        </div>
    )
};

