import 'bootstrap/dist/css/bootstrap.min.css';
import { CAMPAIGNS } from '../data';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { selectProfileId } from '../redux/chosenIdSlice';
import { useEffect, useState } from 'react';


const Campaigns = () => {
    const [chosenCampaigns, setChosenCampaigns] = useState([]);
    const chosenProfileId = useSelector(selectProfileId);

    useEffect(() => {
        const chosenCampaigns = CAMPAIGNS.filter(items => items.profileId === Number.parseInt(chosenProfileId));
        setChosenCampaigns(chosenCampaigns)
    }, [chosenProfileId])

    return (
        <div className='container'>
            <h2>Campaigns for ProfileId: {chosenProfileId}</h2>
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
                    {chosenCampaigns?.map((item, index) =>
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