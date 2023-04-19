import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./to-do-list/to-do-list.module').then( m => m.ToDoListPageModule)
  },
  {
    path: 'aboutapp',
    loadChildren: () => import('./aboutapp/aboutapp.module').then( m => m.AboutappPageModule)
  },
  {
    path: 'searchcourses',
    loadChildren: () => import('./searchcourses/searchcourses.module').then( m => m.SearchcoursesPageModule)
  },
  {
    path: 'coursedetailinfo',
    loadChildren: () => import('./coursedetailinfo/coursedetailinfo.module').then( m => m.CoursedetailinfoPageModule)
  },
  {
    path: 'coursedetailcontents',
    loadChildren: () => import('./coursedetailcontents/coursedetailcontents.module').then( m => m.CoursedetailcontentsPageModule)
  },
  {
    path: 'reviewtraineework',
    loadChildren: () => import('./reviewtraineework/reviewtraineework.module').then( m => m.ReviewtraineeworkPageModule)
  },
  {
    path: 'accountlist',
    loadChildren: () => import('./accountlist/accountlist.module').then( m => m.AccountlistPageModule)
  },
  {
    path: 'courselist',
    loadChildren: () => import('./courselist/courselist.module').then( m => m.CourselistPageModule)
  },
  {
    path: 'coursedetailenrollments',
    loadChildren: () => import('./coursedetailenrollments/coursedetailenrollments.module').then( m => m.CoursedetailenrollmentsPageModule)
  },
  {
    path: 'courseaddassignments',
    loadChildren: () => import('./courseaddassignments/courseaddassignments.module').then( m => m.CourseaddassignmentsPageModule)
  },
  {
    path: 'addaccount',
    loadChildren: () => import('./addaccount/addaccount.module').then( m => m.AddaccountPageModule)
  },
  {
    path: 'addcourse',
    loadChildren: () => import('./addcourse/addcourse.module').then( m => m.AddcoursePageModule)
  },
  {
    path: 'editcourse',
    loadChildren: () => import('./editcourse/editcourse.module').then( m => m.EditcoursePageModule)
  },
  {
    path: 'enrolltrainees',
    loadChildren: () => import('./enrolltrainees/enrolltrainees.module').then( m => m.EnrolltraineesPageModule)
  },
  {
    path: 'reporttype',
    loadChildren: () => import('./reporttype/reporttype.module').then( m => m.ReporttypePageModule)
  },
  {
    path: 'reportcreatetrainee',
    loadChildren: () => import('./reportcreatetrainee/reportcreatetrainee.module').then( m => m.ReportcreatetraineePageModule)
  },
  {
    path: 'reportcreatertrainer',
    loadChildren: () => import('./reportcreatertrainer/reportcreatertrainer.module').then( m => m.ReportcreatertrainerPageModule)
  },
  {
    path: 'reportcreatercourse',
    loadChildren: () => import('./reportcreatercourse/reportcreatercourse.module').then( m => m.ReportcreatercoursePageModule)
  },
  {
    path: 'aboutapphr',
    loadChildren: () => import('./aboutapphr/aboutapphr.module').then( m => m.AboutapphrPageModule)
  },
  {
    path: 'personalinfohr',
    loadChildren: () => import('./personalinfohr/personalinfohr.module').then( m => m.PersonalinfohrPageModule)
  },
  {
    path: 'personalinfotrainer',
    loadChildren: () => import('./personalinfotrainer/personalinfotrainer.module').then( m => m.PersonalinfotrainerPageModule)
  },
  {
    path: 'personalinfoadmin',
    loadChildren: () => import('./personalinfoadmin/personalinfoadmin.module').then( m => m.PersonalinfoadminPageModule)
  },
  {
    path: 'aboutapptrainer',
    loadChildren: () => import('./aboutapptrainer/aboutapptrainer.module').then( m => m.AboutapptrainerPageModule)
  },
  {
    path: 'aboutappadmin',
    loadChildren: () => import('./aboutappadmin/aboutappadmin.module').then( m => m.AboutappadminPageModule)
  },
  {
    path: 'searchcoursestrainer',
    loadChildren: () => import('./searchcoursestrainer/searchcoursestrainer.module').then( m => m.SearchcoursestrainerPageModule)
  },
  {
    path: 'searchcourseshr',
    loadChildren: () => import('./searchcourseshr/searchcourseshr.module').then( m => m.SearchcourseshrPageModule)
  },
  {
    path: 'coursedetailinfotrainer',
    loadChildren: () => import('./coursedetailinfotrainer/coursedetailinfotrainer.module').then( m => m.CoursedetailinfotrainerPageModule)
  },
  {
    path: 'coursedetailcontentstrainer',
    loadChildren: () => import('./coursedetailcontentstrainer/coursedetailcontentstrainer.module').then( m => m.CoursedetailcontentstrainerPageModule)
  },
  {
    path: 'coursedetailenrollmentstrainer',
    loadChildren: () => import('./coursedetailenrollmentstrainer/coursedetailenrollmentstrainer.module').then( m => m.CoursedetailenrollmentstrainerPageModule)
  },
  {
    path: 'accountlistadmin',
    loadChildren: () => import('./accountlistadmin/accountlistadmin.module').then( m => m.AccountlistadminPageModule)
  },
  {
    path: 'searchpathstrainer',
    loadChildren: () => import('./searchpathstrainer/searchpathstrainer.module').then( m => m.SearchpathstrainerPageModule)
  },
  {
    path: 'addpath',
    loadChildren: () => import('./addpath/addpath.module').then( m => m.AddpathPageModule)
  },
  {
    path: 'pathdetailinfotrainer',
    loadChildren: () => import('./pathdetailinfotrainer/pathdetailinfotrainer.module').then( m => m.PathdetailinfotrainerPageModule)
  },
  {
    path: 'searchpaths',
    loadChildren: () => import('./searchpaths/searchpaths.module').then( m => m.SearchpathsPageModule)
  },
  {
    path: 'pathdetailinfo',
    loadChildren: () => import('./pathdetailinfo/pathdetailinfo.module').then( m => m.PathdetailinfoPageModule)
  },
  {
    path: 'pathlist',
    loadChildren: () => import('./pathlist/pathlist.module').then( m => m.PathlistPageModule)
  },
  {
    path: 'reportcreaterpath',
    loadChildren: () => import('./reportcreaterpath/reportcreaterpath.module').then( m => m.ReportcreaterpathPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
