import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


class Skill {
  name: string; // name of the skill
  level: number; // level of the skill (0 to 100) is in percentage
  image: string; // url of the image
  color: string; // color of the skill background (gray or white)
  backgroundColor: string // color of the background for the progress bar

  constructor(name: string, level: number, image: string, color: string, backgroundColor: string) {
    this.name = name;
    this.level = level;
    this.image = image;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Skill[];
  cvForm: FormGroup;

  constructor() {

    // Temporal: Information will be store in a Redis database
    this.skills = [
      new Skill('Tensorflow', 90, 'assets/skills/tensorflow.png', '#FAFAFA', '#ECECEC'),
      new Skill('Nest', 89, 'assets/skills/nest.png', '#ECECEC', '#FAFAFA'),
      new Skill('MongoDB', 86, 'assets/skills/mongo.png', '#FAFAFA', '#ECECEC'),
      new Skill('Docker', 85, 'assets/skills/docker.png', '#ECECEC', '#FAFAFA'),
      new Skill('MySQL', 85, 'assets/skills/mysql.png', '#FAFAFA', '#ECECEC'),
      new Skill('Node.js', 83, 'assets/skills/node.png', '#ECECEC', '#FAFAFA'),
      new Skill('Redis', 80, 'assets/skills/redis.png', '#FAFAFA', '#ECECEC'),
      new Skill('Flask', 78, 'assets/skills/flask.png', '#ECECEC', '#FAFAFA'),
      new Skill('Angular', 77, 'assets/skills/angular.png', '#FAFAFA', '#ECECEC'),
      new Skill('Django', 75, 'assets/skills/django.png', '#ECECEC', '#FAFAFA'),
      new Skill('PyTorch', 70, 'assets/skills/pytorch.png', '#FAFAFA', '#ECECEC'),
      new Skill('Apache Hadoop', 68, 'assets/skills/hadoop.png', '#ECECEC', '#FAFAFA'),
      new Skill('Apache Hive', 67, 'assets/skills/hive.png', '#FAFAFA', '#ECECEC'),
      new Skill('Apache Spark', 65, 'assets/skills/spark.png', '#ECECEC', '#FAFAFA'),
      new Skill('InfluxDB', 60, 'assets/skills/influxdb.png', '#FAFAFA', '#ECECEC'),
      new Skill('Grafana', 60, 'assets/skills/grafana.png', '#ECECEC', '#FAFAFA'),
      new Skill('AWS', 50, 'assets/skills/aws.png', '#FAFAFA', '#ECECEC'),
      new Skill('Kubernetes', 40, 'assets/skills/kubernetes.png', '#ECECEC', '#FAFAFA'),
      new Skill('Apache Airflow', 30, 'assets/skills/airflow.png', '#FAFAFA', '#ECECEC'),
      new Skill('GraphQL', 20, 'assets/skills/graphql.png', '#ECECEC', '#FAFAFA'),
    ]

    this.cvForm = new FormGroup({});
  }

  ngOnInit(): void {
  }

  download() {
    let value = this.cvForm.get('token').value
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1u8CkeZLftnndjSpvHEBxWlaIsKsgfF_P/view?usp=sharing');
    link.setAttribute('download', '1u8CkeZLftnndjSpvHEBxWlaIsKsgfF_P.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();

  }


}
