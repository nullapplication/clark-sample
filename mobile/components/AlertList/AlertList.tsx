import React from "react";
import { StyleSheet, View } from "react-native";
import AlertItem from "../AlertItem";
import SubtleText from "../Text/SubtleText";
import RecentAlertStatus from "../Chat/RecentAlertStatus";
import NormalAlertStatus from "../Chat/NormalAlertStatus";
import CardView from "../CardView";
import SectionTitleText from "../Text/SectionTitleText";

export default function AlertList() {
  // This is a placeholder for the suspicious transaction list
  // We will actually call an API to get the suspicious transactions
  // api.acceleratemx.com/account/transactions/suspicious
  let alerts = [
    {
      id: 1,
      tailNumber: "N12345",
      title: "Airworthiness Directive #123 Due Immediately",
      description: `DATE: December 12, 2024
AD #: 2024-25-51
Emergency Airworthiness Directive (AD) 2024-25-51 is sent to owners and operators of
Airbus Helicopters Deutschland GmbH Model MBB-BK 117 C-2 helicopters.
Background
This emergency AD was prompted by a report of vibrations of the yaw axis during a hover
taxi involving a helicopter having tail rotor actuator part number (P/N) B673M40A1002
(manufacturer P/N 5038A0000-01) installed. The European Union Aviation Safety Agency (EASA),
which is the Technical Agent for the Member States of the European Union, has issued EASA
Emergency AD 2024-0237-E, dated December 9, 2024 (EASA Emergency AD 2024-0237-E) (also
referred to as the mandatory continuing airworthiness information, or the MCAI), to correct an unsafe
condition on Airbus Helicopters Deutschland GmbH Model MBB-BK117 C-2 helicopters. The
MCAI states that a bolt on the tail rotor actuator that connects the cardan-pivot joint assembly with
the tail rotor actuator piston rod was found worn and broken during subsequent inspection. EASA
considers the MCAI an interim action.
The FAA is issuing this emergency AD to detect a worn tail rotor actuator bolt. This
condition, if not addressed, could result in failure of a tail rotor actuator bolt, loss of tail rotor control,
and subsequent loss of control of the helicopter.
Related Material
The FAA reviewed EASA Emergency AD 2024-0237-E, which requires, for helicopters
having tail rotor actuator P/N B673M40A1002 (manufacturer P/N 5038A0000-01) installed,
repetitively inspecting the bolted joint between the cardan-pivot joint assembly and the tail rotor
actuator piston rod. Depending on the results, EASA Emergency AD 2024-0237-E requires
contacting AH [Airbus Helicopters] to obtain applicable repair instructions and accomplishing those
instructions within the compliance time specified within. EASA Emergency AD 2024-0237-E also
prohibits installing this part-numbered tail rotor actuator on any helicopter unless its requirements are
met.
FAA's Determination
These products have been approved by the aviation authority of another country and are
approved for operation in the United States. Pursuant to the FAA's bilateral agreement with this State
of Design Authority, it has notified the FAA of the unsafe condition described in the MCAI described
above. The FAA is issuing this emergency AD after determining that the unsafe condition described
previously is likely to exist or develop on other products of the same type design.
2
Emergency AD Requirements
This emergency AD requires accomplishing the actions specified in EASA Emergency AD
2024-0237-E, described previously, except for any differences identified as exceptions in the
regulatory text of this emergency AD.
Interim Action
The FAA considers that this emergency AD is an interim action. If final action is later
identified, the FAA might consider further rulemaking then.
Justification for Immediate Adoption and Determination of the Effective Date
Section 553(b) of the Administrative Procedure Act (APA) (5 U.S.C. 551 et seq.) authorizes
agencies to dispense with notice and comment procedures for rules when the agency, for “good
cause,” finds that those procedures are “impracticable, unnecessary, or contrary to the public
interest.” Under this section, an agency, upon finding good cause, may issue a final rule without
providing notice and seeking comment prior to issuance. Further, section 553(d) of the APA
authorizes agencies to make rules effective in less than thirty days, upon a finding of good cause.
An unsafe condition exists that requires the immediate adoption of this emergency AD to all
known U.S. owners and operators of these helicopters. The FAA has found that the risk to the flying
public justifies forgoing notice and comment prior to adoption of this rule because a tail rotor
actuator is part of an assembly that is critical to the control of a helicopter. Failure of this part could
result in an emergency condition on these helicopters, which primarily conduct air ambulance and
military operations. Additionally, the FAA has no information pertaining to the extent of wear in the
tail rotor actuator bolts that may currently exist in helicopters or how quickly the condition may
propagate to failure, therefore, the initial actions required by this emergency AD must be
accomplished before next flight. Accordingly, notice and opportunity for prior public comment are
impracticable and contrary to the public interest pursuant to 5 U.S.C. 553(b).
In addition, the FAA finds that good cause exists pursuant to 5 U.S.C. 553(d) for making this
amendment effective in less than 30 days, for the same reasons the FAA found good cause to forgo
notice and comment.
Authority for this Rulemaking
Title 49 of the United States Code specifies the FAA's authority to issue rules on aviation
safety. Subtitle I, section 106, describes the authority of the FAA Administrator. Subtitle VII:
Aviation Programs, describes in more detail the scope of the Agency's authority.
The FAA is issuing this rulemaking under the authority described in Subtitle VII, Part A,
Subpart III, Section 44701: General requirements. Under that section, Congress charges the FAA
with promoting safe flight of civil aircraft in air commerce by prescribing regulations for practices,
methods, and procedures the Administrator finds necessary for safety in air commerce. This
regulation is within the scope of that authority because it addresses an unsafe condition that is likely
to exist or develop on products identified in this rulemaking action.
Presentation of the Actual Emergency Airworthiness Directive
The FAA is issuing this emergency Airworthiness Directive under 49 U.S.C. 106(g), 40113,
and 44701 according to the authority delegated to me by the Administrator.
3
2024-25-51 Airbus Helicopters Deutschland GmbH: Project Identifier MCAI-2024-00736-R.
(a) Effective Date
This emergency Airworthiness Directive (AD) is effective upon receipt.
(b) Affected ADs
None.
(c) Applicability
This emergency AD applies to Airbus Helicopters Deutschland GmbH Model MBB-BK 117
C-2 helicopters, certificated in any category.
Note 1 to paragraph (c): Helicopters with an MBB-BK 117C-2e designation are Model
MBB-BK 117 C-2 helicopters.
(d) Subject
Joint Aircraft System Component (JASC) Code 6700, Rotorcraft Flight Control.
(e) Unsafe Condition
This emergency AD was prompted by a report of vibrations of the yaw axis during a hover
taxi. The FAA is issuing this emergency AD to detect a worn tail rotor actuator bolt. The unsafe
condition, if not addressed, could result in failure of a tail rotor actuator bolt, loss of tail rotor control,
and subsequent loss of control of the helicopter.
(f) Compliance
Comply with this emergency AD within the compliance times specified, unless already done.
(g) Requirements
Except as specified in paragraphs (h) and (i) of this emergency AD: Comply with all required
actions and compliance times specified in, and in accordance with, European Union Aviation Safety
Agency Emergency AD 2024-0237-E, dated December 9, 2024 (EASA Emergency AD 2024-0237-
E).
(h) Exceptions to EASA Emergency AD 2024-0237-E
(1) Where EASA Emergency AD 2024-0237-E requires compliance in terms of flight hours,
this emergency AD requires using hours time-in-service.
(2) Where EASA Emergency AD 2024-0237-E refers to its effective date, this emergency AD
requires using the effective date of this emergency AD.
(3) Where the material referenced in paragraph (1) of EASA Emergency AD 2024-0237-E
states to “use a suitable pen,” this emergency AD requires replacing that text with “use a permanent
marker.”
(4) Where paragraph (3) of EASA Emergency AD 2024-0237-E states “discrepancy,” for the
purpose of this emergency AD, a “discrepancy” is defined as the lines on the piston rod and the bolt
4
do not stay aligned to each other while rotating the tail rotor actuator, or the line is not aligned on the
piston rod, the cardan-pivot joint assembly, the lever assembly, and the bolt after connecting the tail
rotor actuator upper control rod and the bellcrank.
(5) Where paragraph (3) of EASA Emergency AD 2024-0237-E states to “contact AH for
applicable repair instructions and, within the compliance time specified in those instructions,
accomplish those instructions accordingly,” this emergency AD requires replacing that text with
“accomplish corrective action in accordance with a method approved by the Manager, International
Validation Branch, FAA; or EASA; or Airbus Helicopters Deutschland GmbH's EASA Design
Organization Approval (DOA). If approved by the DOA, the approval must include the DOA-
authorized signature.”
(6) Where paragraphs (4) and (5) of EASA Emergency AD 2024-0237-E specify
accomplishing corrective actions, this emergency AD requires accomplishing corrective actions in
accordance with a method approved by the Manager, International Validation Branch, FAA; or
EASA; or Airbus Helicopters Deutschland GmbH's EASA DOA. If approved by the DOA, the
approval must include the DOA-authorized signature.
(7) This emergency AD does not adopt the “Remarks” section of EASA Emergency AD
2024-0237-E.
(i) No Reporting Requirement
Although the material referenced in EASA Emergency AD 2024-0237-E specifies to submit
certain information to the manufacturer, this emergency AD does not require that action.
(j) Alternative Methods of Compliance (AMOCs)
(1) The Manager, International Validation Branch, FAA, has the authority to approve AMOCs
for this emergency AD, if requested using the procedures found in 14 CFR 39.19. In accordance with
14 CFR 39.19, send your request to your principal inspector or local Flight Standards District Office,
as appropriate. If sending information directly to the manager of the International Validation Branch,
send it to the attention of the person identified in paragraph (k)(1) of this emergency AD and email
to: AMOC@faa.gov.
(2) Before using any approved AMOC, notify your appropriate principal inspector, or lacking
a principal inspector, the manager of the local flight standards district office/certificate holding
district office.
(k) Additional Information
(1) For more information about this emergency AD, contact Tara Lucas, Aviation Safety
Engineer, FAA, 1600 Stewart Ave., Suite 410, Westbury, NY 11590; phone: (206) 231-3189; email:
Tara.Lucas@faa.gov.
5
(2) For EASA material identified in this emergency AD, contact EASA, Konrad-Adenauer-
Ufer 3, 50668 Cologne, Germany; phone: +49 221 8999 000; email: ADs@easa.europa.eu; website:
easa.europa.eu. You may find the EASA material on the EASA website at ad.easa.europa.eu.
Issued on December 12, 2024.
Steven W. Thompson,
Acting Deputy Director, Compliance & Airworthiness Division,
Aircraft Certification Service.`,
      dueDate: new Date(),
    },
  ];
  // alerts = [];

  const hasAlerts = alerts && alerts.length > 0;

  return (
    <View style={styles.container}>
      {hasAlerts && <RecentAlertStatus />}

      {!hasAlerts && <NormalAlertStatus />}

      <View style={styles.lastSyncContainer}>
        <SubtleText>Last synced 15 mins ago</SubtleText>
      </View>

      {alerts && alerts.length > 0 && (
        <>
          <View style={styles.sectionTitleContainer}>
            <SectionTitleText>Recent Alerts</SectionTitleText>
          </View>
          <CardView>
            {alerts.map((alert) => (
              <AlertItem key={alert.id} alert={alert} />
            ))}
          </CardView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    width: "100%",
  },
  statusContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#B9E9CB",
    padding: 20,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  lastSyncContainer: {
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  sectionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
