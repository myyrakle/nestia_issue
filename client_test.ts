import { getItem } from './api/functional/item'
import { IConnection } from './api/IConnection'

async function main()
{
    const connection: IConnection = {
        host: 'http://localhost:3000'
    }

    const item = await getItem(connection, '1');
    console.log(item);
}

main();