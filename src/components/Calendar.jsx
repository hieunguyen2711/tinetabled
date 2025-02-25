import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
  ...           
                <tr>
                    <th> </th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                
                <tbody>
                    <tr>
                        <td className="time">8 am </td>
                        <Event event='Fancy Dinner 🎩' color ='green' location='QC Sushi'/>
                        <td></td>
                        <Event event='Test Event' color ='red' location='QC Sushi'/>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green' location='Undecided'/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">9 am </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Lime 53'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location='Undecided'/>
                    </tr>

                    <tr>
                        <td className="time">10 am </td>
                        <td></td>
                        <Event event='CSC 330' color ='blue' location='Olin 209'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">11 am </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch Time' color ='green' location='Gerber Center'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">12 pm </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">1 pm </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">2 pm </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">3 pm </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">4 pm </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Gym time' color ='blue' location='Pepsico'/>
                        <td></td>
                    </tr>

                </tbody>    
            </table>
        </div>
    )
}

export default Calendar;