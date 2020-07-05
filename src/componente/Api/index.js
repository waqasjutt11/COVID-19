import axios from 'axios';

export const getData = async () => {
    const { data: { lastUpdate } } = await axios.get('https://covid19.mathdro.id/api');
    return { lastUpdate };
}
getData();

