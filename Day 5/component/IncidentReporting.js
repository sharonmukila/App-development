import React from 'react'
import './IncidentReporting.css';
export default function IncidentReporting() {
  return (
    <div>

    <form id="locform" action="http://icodev.incaseofcrisis.com/AppBackend/IncidentReport/Default.aspx" method="post" encType="multipart/form-data">
    <div>
      <input type="hidden" id="ICORF_email_address" name="ICORF_email_address" defaultValue />
      <input type="hidden" id="ICORF_password" name="ICORF_password" defaultValue />
      <input type="hidden" id="ICORF_EventID" name="ICORF_EventID" defaultValue={49806} />
      <input type="hidden" id="ICORF_PubGUID" name="ICORF_PubGUID" defaultValue="AF523409-BA31-4CC4-BE3D-8FAAB0355DD1" />
      <input type="hidden" id="ICORF_EventName" name="ICORF_EventName" defaultValue="Big Honkin' IR" />
      <input type="hidden" id="ICORF_PlanName" name="ICORF_PlanName" defaultValue="JB Dev Test Plan 54" />
      <input type="hidden" id="ICORF_DeviceName" name="ICORF_DeviceName" defaultValue="JB MacBook Pro" />
      <input type="hidden" id="ICORF_DeviceModel" name="ICORF_DeviceModel" defaultValue="MacBook Pro" />
      <input type="hidden" id="ICORF_DeviceOS" name="ICORF_DeviceOS" defaultValue="OSX El Capitan" />
      <input type="hidden" id="ICORF_DeviceVersion" name="ICORF_DeviceVersion" defaultValue="10.11.5" />
   
      <input type="hidden" id="ICORF_DeviceTZoffset" name="ICORF_DeviceTZoffset" defaultValue={0} />
      
     
      <input type="hidden" id="ICORF_Altitude" name="ICORF_Altitude" defaultValue />
      <input type="hidden" id="ICORF_HorizAccuracy" name="ICORF_HorizAccuracy" defaultValue />
      <input type="hidden" id="ICORF_VertAccuracy" name="ICORF_VertAccuracy" defaultValue={0} />
      <input type="hidden" id="ICORF_VendorUUID" name="ICORF_VendorUUID" defaultValue="ICC-12345" />
      <input type="hidden" id="ICORF_BundleID" name="ICORF_BundleID" defaultValue="com.incaseofcrisis.icodev" />
      <input type="hidden" id="ICORF_AppVersion" name="ICORF_AppVersion" defaultValue={1.0} />
      <input type="hidden" id="ICORF_HTMLform" name="ICORF_HTMLform" defaultValue="Nothing to see here..." />
      <h3>JB Dev Test Plan 54 / Big Honkin' IR</h3>
      <p>
        Current position:<br />
        <b>Current Time</b>: <input type="text" id="ICORF_DeviceTime" name="ICORF_DeviceTime" defaultValue /><br />
        <b>Lat</b>: <input type="text" id="ICORF_Latitude" name="ICORF_Latitude" defaultValue /><br />
        <b>Long</b>: <input type="text" id="ICORF_Longitude" name="ICORF_Longitude" defaultValue />
      </p>
      <div style={{fontSize: '90%'}}>
        <p>
          <strong>Location of incident:</strong><br />
          <select name="Location">
            <option disabled="disabled" selected="selected" value>Please Choose One...</option>
            <option value="Classroom">Classroom</option>
            <option value="Gym">Gym</option>
            <option value="Hallway">Hallway</option>
            <option value="Locker Room">Locker Room</option>
            <option value="Lunch Room">Lunch Room</option>
            <option value="Playground">Playground</option>
            <option value="Restroom">Restroom</option>
            <option value="Bus Stop">Bus Stop</option>
            <option value="On Bus">On Bus</option>
          </select> 
        </p>
        <p><strong>Name of victim(s)</strong>:
          <br />
          <input id="txtName" name="txtName" style={{width: '50%', fontSize: '110%'}} type="text" />
        </p>
        <p><strong>Type of Bullying:</strong>
          <br />
          <input name="BullyingType" type="checkbox" defaultValue="Physical" />Physical
          <br />
          <input name="BullyingType" type="checkbox" defaultValue="Relational" />Relational
          <br />
          <input name="BullyingType" type="checkbox" defaultValue="Verbal" />Verbal</p>
        <p><strong>If physical, did it result in injury?</strong>
          <br />
          <input name="ResultInInjury" type="radio" defaultValue="Yes" />Yes
          <input name="ResultInInjury" type="radio" defaultValue="No" />No</p>
        <p><strong>If physical, was it reported to school nurse?</strong>
          <br />
          <input name="ReportedToNurse" type="radio" defaultValue="Yes" />Yes
          <input name="ReportedToNurse" type="radio" defaultValue="No" />No</p>
        <p><strong>If physical, was it reported to police?</strong>
          <br />
          <input name="ReportedToPolice" type="radio" defaultValue="Yes" />Yes
          <input name="ReportedToPolice" type="radio" defaultValue="No" />No</p>
        <p><strong>Bullying Behaviors:&nbsp;</strong>Please check the type of behavior(s) assoicated with this incident:</p>
        <table border={0} cellPadding={4} cellSpacing={4} style={{fontSize: '100%', borderCollapse: 'collapse'}}>
          <tbody>
            <tr>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="CyberBullying" />Cyber Bullying</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="DamagedPossessions" />Damaged Possessions</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="DemeaningComments" />Demeaning Comments</td>
            </tr>
            <tr>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Disability" />Disability</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Excluded" />Excluded</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Hit" />Hit</td>
            </tr>
            <tr>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="InappropriateTouch" />Inappropriate Touching</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="IntimidationExtortion" />Intimidation of Extortion</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Kicked" />Kicked</td>
            </tr>
            <tr>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Punched" />Punched</td>
              <td>
                <input name="BullyingBehaviors" type="checkbox" defaultValue="Racial" />Racial</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Religious" />Religious</td>
            </tr>
            <tr>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="ShovedPushed" />Shoved or Pushed</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="StaringLeering" />Staring or Leering</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="TauntingRidiculing" />Taunting or Ridiculing</td>
            </tr>
            <tr>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="Threatened" />Threatened</td>
              <td>
                <input name="BullyBehaviors" type="checkbox" defaultValue="ToldLiesRumors" />Told Lies or False Rumors</td>
              <td />
            </tr>
          </tbody>
        </table>
        <p><strong>Reported by</strong>:
          <br />
          <input name="Reportedby" style={{width: '50%', fontSize: '110%'}} type="text" />
        </p>
        <p><strong>Describe the incident</strong>:
          <br />
          <textarea name="Description" rows={12} style={{width: '95%', fontSize: '110%'}} defaultValue={""} />
        </p>
        <p><strong>Physical Evidence:</strong>
          <br />
          <input name="PhysicalEvidence" type="checkbox" defaultValue="Notes" /> Notes
          <input name="PhysicalEvidence" type="checkbox" defaultValue="Email" /> Email
          <input name="PhysicalEvidence" type="checkbox" defaultValue="Graffiti" /> Graffiti
          <input name="PhysicalEvidence" type="checkbox" defaultValue="Video_Audio" /> Video/Audio
          <input name="PhysicalEvidence" type="checkbox" defaultValue="Website" /> Website
          <br />
          <input name="PhysicalEvidence" type="checkbox" defaultValue="Other" /> Other:
          <input name="PhysicalEvidenceOtherExplain" style={{width: '25%', fontSize: '110%'}} type="text" />
        </p>
        <p><strong>Upload a photo of the incident:</strong>
          <br />
          <input accept="image/*" capture="camera" name="fileUpload" type="file" />
        </p>
      </div>
      <p id="message">
      </p>
      <p style={{textAlign: 'center'}}>
        <button id="submitButton" name="submitButton" type="button" onclick="decideDisplayModal(); return false();">
          Submit This Report</button>
      </p>
    </div>
    <div id="overlay" />
    <div id="modalMsg" style={{width: '200px', height: 'auto', borderRadius: '20px', borderColor: 'Black', borderStyle: 'solid', color: 'Red'}} className="HideModal">
      <p style={{margin: '10px'}}>
        This Incident Report will be submitted in
        <span id="ICORF_remainingSeconds" /> seconds.
        <br />
        <canvas id="myCanvas" width={100} height={100} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>no canvas support</canvas>
        <br /> To stop this from happening, please press
        <br />
        <button type="button" onclick="return RemoveModal();" style={{fontSize: '18px', fontWeight: 'bold', background: '#0B1E7D', color: '#fff', padding: '5px', borderRadius: '8px', border: '2px solid #888', width: '100%', height: '2em'}}>Cancel Submission</button>
      </p>
      <p>
        Current position:<br />
        <b>Lat</b>: <input type="text" id="ICORF_Latitude" name="ICORF_Latitude" /><br />
        <b>Long</b>: <input type="text" id="ICORF_Longitude" name="ICORF_Longitude" />
      </p>
    </div>
  </form>
</div>

  )
}