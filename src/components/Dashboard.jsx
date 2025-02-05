import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{width: '100%', height: '100%', paddingLeft: 21, paddingRight: 21, paddingTop: 41, paddingBottom: 41, background: '#143F66', boxShadow: '5px 0px 27px rgba(0, 0, 0, 0.25)', border: '1px #9747FF solid', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div style={{alignSelf: 'stretch', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>My Bot</div>
    <div style={{height: 390, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, border: '2px white solid', justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
            <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Dashboard</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
            <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Create Comment</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
            <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Default Comments</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
            <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>History</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
            <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Bots</div>
        </div>
        <div style={{alignSelf: 'stretch', height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
            <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Register a Bot</div>
        </div>
    </div>
    <div style={{width: 269, height: 55, paddingLeft: 8, paddingRight: 8, paddingTop: 9, paddingBottom: 9, borderRadius: 9, justifyContent: 'flex-start', alignItems: 'center', gap: 9, display: 'inline-flex'}}>
        <div style={{width: 37, height: 37, background: '#FFFDFD', borderRadius: 7}} />
        <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>LogOut</div>
    </div>
</div>

  );
};

export default Dashboard;
