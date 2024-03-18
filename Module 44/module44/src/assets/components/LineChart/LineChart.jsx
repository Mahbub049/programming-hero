import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart as BChart, Bar} from 'recharts';

const LineChart = () => {

    const studentData = [
        { name: "Alice",  Math: 85, Science: 90, English: 78, History: 82  },
        { name: "Bob",  Math: 72, Science: 88, English: 80, History: 75  },
        { name: "Charlie",  Math: 90, Science: 85, English: 92, History: 88  },
        { name: "David",  Math: 78, Science: 75, English: 80, History: 72  },
        { name: "Emma",  Math: 95, Science: 92, English: 88, History: 90  },
        { name: "Frank",  Math: 83, Science: 80, English: 78, History: 85  },
        { name: "Grace",  Math: 88, Science: 90, English: 85, History: 82  },
        { name: "Hannah",  Math: 82, Science: 75, English: 80, History: 78  },
        { name: "Ian",  Math: 90, Science: 88, English: 92, History: 85  },
        { name: "Jessica",  Math: 78, Science: 82, English: 75, History: 80  }
      ];

      const studentDatas = [
        { name: "Alice", totalMarks: 335 },
        { name: "Bob", totalMarks: 315 },
        { name: "Charlie", totalMarks: 355 },
        { name: "David", totalMarks: 305 },
        { name: "Emma", totalMarks: 365 },
        { name: "Frank", totalMarks: 326 },
        { name: "Grace", totalMarks: 345 },
        { name: "Hannah", totalMarks: 315 },
        { name: "Ian", totalMarks: 355 },
        { name: "Jessica", totalMarks: 315 }
      ];

    return (
        <div>
            <LChart width={1440} height={600} data={studentData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line type='monotone' dataKey='Math' stroke="#8884d8"></Line>
                <Line type='monotone' dataKey='Science' stroke="#4180d8"></Line>
                <Line type='monotone' dataKey='English' stroke="red"></Line>
            </LChart>

            <BChart width={1440} height={900} data={studentDatas}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='totalMarks' fill='green'></Bar>
            </BChart>

        </div>
    );
};

export default LineChart;