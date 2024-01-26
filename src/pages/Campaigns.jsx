import 'bootstrap/dist/css/bootstrap.min.css';
import { CAMPAIGNS } from '../data';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectProfileId } from '../redux/chosenIdSlice';
import { useEffect, useState } from 'react';
import { FiltersCompaigns } from '../components/FiltersCompaigns/FiltersCompaigns';


const Campaigns = () => {
    const [chosenCampaigns, setChosenCampaigns] = useState([]);
    const chosenProfileId = useSelector(selectProfileId);
    const [sort, setSort] = useState({ value: 'all', label: 'All compaigns' });
    const [visibleCampaigns, setVisibleCampaigns] = useState([]);

    useEffect(() => {
        const chosenCampaigns = CAMPAIGNS.filter(items => items.profileId === Number.parseInt(chosenProfileId));
        setChosenCampaigns(chosenCampaigns)
    }, [chosenProfileId]);

    useEffect(() => {
        if (sort.value === 'all') {
            setVisibleCampaigns(chosenCampaigns);
            return;
        };

        let campaignsBySort = [];
        if (sort.value === 'decrease price') {
            campaignsBySort = chosenCampaigns.sort((a, b) => a.cost - b.cost)
        };
        if (sort.value === 'increase price') {
            campaignsBySort = chosenCampaigns.sort((a, b) => b.cost - a.cost)
        };
        if (sort.value === 'decrease click') {
            campaignsBySort = chosenCampaigns.sort((a, b) => a.clicks - b.clicks)
        };
        if (sort.value === 'increase click') {
            campaignsBySort = chosenCampaigns.sort((a, b) => b.clicks - a.clicks)
        };
        setVisibleCampaigns(campaignsBySort);
    }, [sort.value, chosenCampaigns]);

    return (
        <div className='container'>
            <h2>Campaigns for ProfileId: {chosenProfileId}</h2>
            <FiltersCompaigns sort={sort} onSort={setSort} />
            <table className="table table-striped table-bordered">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">CampaignId</th>
                        <th scope="col">Clicks</th>
                        <th scope="col">Cost, $</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {visibleCampaigns?.map((item, index) =>
                        <tr key={nanoid(3)}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.campaignId}</td>
                            <td>{item.clicks}</td>
                            <td>{item.cost}</td>
                            <td>{item.date}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
};

export default Campaigns;