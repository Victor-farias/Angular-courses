import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html',
})
export class CourseInfoComponent {
    course!: Course;

    constructor(private activateRoute: ActivatedRoute, private courseService : CourseService) {}

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id')!);
    }
}