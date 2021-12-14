import './table.css'
import InfoIcon from '@material-ui/icons/Info';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'


export default function Table() {
    return (
        <>
        <div className="top">
        <div className='topLeft'>
        <p><b style={{ color : 'blue'}}><DashboardIcon />Azure Databricks</b>  status page for azure
        <ul className="topList">
        <li className="topListItem">Support</li>
        <li> <button className="topListItem" type='button'>SUBSCRIBE TO UPDATES</button> </li>
        </ul>
        </p>
        </div>
        </div>
        <div className="topLink">
            <div className="topLinkItem">
        <span>AWS</span>
        <span>  GCP</span>
        <span>  Azure Databricks</span>
        </div>
        </div>
        <hr/>
        <span className="centerList"><hr/><InfoIcon />Plannend Maintenance</span>
        <span className="centerList">Updated a few seconds ago<hr/></span>
        <div>
            <h1>Status by Azure Region</h1>
            <div className="midbar">
                <span style={{ color:'blue'}}>America<InfoIcon /></span>
                <span>Europe<InfoIcon /></span>
                <span>Asia Pacific<InfoIcon /></span>
                <span>Middle east and Africa<InfoIcon /></span>
                <span>US government<InfoIcon /></span>
            </div>
        </div>
        <table className="info">
        <tr>
            <th>Service Components</th>
            <th>Canada Central</th>
            <th>Canada East</th>
            <th>West US</th>
            <th>West US 2</th>
            <th>South Central US</th>
            <th>Brazil South</th>
            <th>East US 2</th>
            <th>East US</th>
            <th>Central US</th>
            <th>US government</th>
        </tr>
        <hr/>
        <tr>
            <th>API service</th>
            <th><InfoIcon /></th>
           <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
        </tr>
        <hr/>
        <tr>
            <tn>Authentication</tn>
            <th><InfoIcon /></th>
           <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
        </tr>
        <hr/>
        <tr>
            <th>Compute service</th>
            <th><InfoIcon /></th>
           <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
        </tr>
        <hr/>
        <tr>
            <th>Jobs service</th>
            <th><InfoIcon /></th>
           <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
        </tr>
        <hr/>
        <tr>
            <th>ODBC/JDBC service</th>
            <th><InfoIcon /></th>
           <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
        </tr>
        <hr/>
        <tr>
            <th>User interface</th>
            <th><InfoIcon /></th>
           <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
            <th><InfoIcon /></th>
        </tr>
        <hr/>
        </table>
        <h2>External Services</h2><br/>
        <hr/>
        <div className="bottomSide"><CheckCircleIcon />Azure</div>
        <hr/>
        </>

    )
}

