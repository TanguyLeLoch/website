import{a as k,b as I,c as j,d as J,e as K}from"./chunk-5V56Z4DD.js";import{A as xe,g as se,h as fe,i as ve,j as Q,r as ue,s as q,t as L,v as G,w as Y,x as S,y as ge,z as E}from"./chunk-BH5D36GR.js";import{Fa as v,H as R,Ia as A,Ja as O,K as $,Ka as u,M as f,Qa as C,Ra as P,Sa as B,Ta as F,Ua as x,Va as h,Wa as l,Xa as n,Ya as i,Za as m,bb as oe,cb as ae,db as U,ga as M,hb as _,ib as le,jb as pe,kb as de,lb as z,mb as N,nb as me,pb as ce,qa as D,qb as g,rb as p,sa as r,sb as s,tb as b,vb as H,wb as V,yb as y}from"./chunk-D5L3LCJT.js";var W=class e{profileData=f(E);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-profile-card"]],decls:10,vars:4,consts:[["appFadeIn","",1,"relative","overflow-hidden","rounded-2xl"],["styleClass","!bg-transparent !border-0 !shadow-none"],[1,"relative"],[1,"aspect-square","overflow-hidden","rounded-xl"],[1,"w-full","h-full","object-cover",3,"src","alt"],[1,"absolute","bottom-0","left-0","right-0","bg-gradient-to-t","from-black/70","to-transparent","p-6"],[1,"text-2xl","font-bold","text-white","font-mono"],[1,"text-primary-300","font-medium"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"p-card",1)(2,"div",2)(3,"div",3),m(4,"img",4),i(),n(5,"div",5)(6,"h1",6),p(7),i(),n(8,"p",7),p(9),i()()()()()),t&2&&(r(4),l("src",a.profileData.profile.profilePicture,D)("alt",a.profileData.profile.name),r(3),b(" ",a.profileData.profile.name," "),r(2),b(" ",a.profileData.profile.jobTitle," "))},dependencies:[k,I],encapsulation:2,changeDetection:0})};var he=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Fe=["*"],Me={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},je={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},ye=(()=>{class e extends L{name="divider";style=he;classes=je;inlineStyles=Me;static \u0275fac=(()=>{let t;return function(d){return(t||(t=M(e)))(d||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var Ce=new $("DIVIDER_INSTANCE"),Z=(()=>{class e extends Y{$pcDivider=f(Ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=f(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=f(ye);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let t;return function(d){return(t||(t=M(e)))(d||e)}})();static \u0275cmp=v({type:e,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(a,d){a&2&&(C("aria-orientation",d.layout)("data-p",d.dataP),ce(d.sx("root")),g(d.cn(d.cx("root"),d.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[H([ye,{provide:Ce,useExisting:e},{provide:G,useExisting:e}]),A([S]),O],ngContentSelectors:Fe,decls:2,vars:3,consts:[[3,"pBind"]],template:function(a,d){a&1&&(le(),n(0,"div",0),pe(1),i()),a&2&&(g(d.cx("content")),l("pBind",d.ptm("content")))},dependencies:[Q,q,ge,S],encapsulation:2,changeDetection:0})}return e})();var we=(e,o)=>o.title;function Pe(e,o){e&1&&(n(0,"div",10)(1,"h2",11),p(2,"About Me"),i()())}function Be(e,o){if(e&1&&m(0,"p-tag",5),e&2){let t=o.$implicit;l("value",t)("rounded",!0)}}function ze(e,o){if(e&1&&(n(0,"div",9),m(1,"i"),n(2,"h4",12),p(3),i(),n(4,"p",13),p(5),i()()),e&2){let t=o.$implicit;r(),g(t.icon+" text-3xl text-primary mb-3"),r(2),s(t.title),r(2),s(t.description)}}var ee=class e{profileData=f(E);get headlines(){return[`${this.profileData.getAge()} yo`,this.profileData.profile.location,this.profileData.profile.status]}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-about-card"]],decls:17,vars:2,consts:[["header",""],["appFadeIn","",3,"fadeDelay"],["styleClass","h-full"],[1,"space-y-4"],["appStaggerChildren","",1,"flex","flex-wrap","gap-2"],["severity","secondary",3,"value","rounded"],[1,"text-muted-color","leading-relaxed"],[1,"text-lg","font-semibold","text-color","mb-4"],["appStaggerChildren","",1,"grid","grid-cols-1","md:grid-cols-3","gap-4"],[1,"text-center","p-4","rounded-xl","bg-surface-50","dark:bg-surface-800","hover:bg-surface-100","dark:hover:bg-surface-700","transition-colors"],[1,"p-4","pb-0"],[1,"text-xl","font-bold","text-color","font-mono"],[1,"font-semibold","text-color","mb-2"],[1,"text-muted-color","text-sm"]],template:function(t,a){t&1&&(n(0,"div",1)(1,"p-card",2),u(2,Pe,3,0,"ng-template",null,0,y),n(4,"div",3)(5,"div",4),x(6,Be,1,2,"p-tag",5,F),i(),n(8,"p",6),p(9),i(),m(10,"p-divider"),n(11,"div")(12,"h3",7),p(13,"Services"),i(),n(14,"div",8),x(15,ze,6,4,"div",9,we),i()()()()()),t&2&&(l("fadeDelay",.1),r(6),h(a.headlines),r(3),b(" ",a.profileData.profile.introText," "),r(6),h(a.profileData.services))},dependencies:[k,j,Z,I,J],encapsulation:2,changeDetection:0})};var _e=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var Ne=["content"],Re=["opposite"],$e=["marker"],ie=e=>({$implicit:e});function Ae(e,o){e&1&&U(0)}function Oe(e,o){e&1&&U(0)}function Ue(e,o){if(e&1&&(oe(0),u(1,Oe,1,0,"ng-container",3),ae()),e&2){let t=_().$implicit,a=_();r(),l("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",V(2,ie,t))}}function He(e,o){if(e&1&&m(0,"div",2),e&2){let t=_(2);g(t.cx("eventMarker")),l("pBind",t.ptm("eventMarker")),C("data-p",t.dataP)}}function Ve(e,o){if(e&1&&m(0,"div",2),e&2){let t=_(2);g(t.cx("eventConnector")),l("pBind",t.ptm("eventConnector")),C("data-p",t.dataP)}}function Qe(e,o){e&1&&U(0)}function qe(e,o){if(e&1&&(n(0,"div",2)(1,"div",2),u(2,Ae,1,0,"ng-container",3),i(),n(3,"div",2),u(4,Ue,2,4,"ng-container",4)(5,He,1,4,"ng-template",null,0,y)(7,Ve,1,4,"div",5),i(),n(8,"div",2),u(9,Qe,1,0,"ng-container",3),i()()),e&2){let t=o.$implicit,a=o.last,d=me(6),c=_();g(c.cx("event")),l("pBind",c.ptm("event")),C("data-p",c.dataP),r(),g(c.cx("eventOpposite")),l("pBind",c.ptm("eventOpposite")),C("data-p",c.dataP),r(),l("ngTemplateOutlet",c.oppositeTemplate||c._oppositeTemplate)("ngTemplateOutletContext",V(23,ie,t)),r(),g(c.cx("eventSeparator")),l("pBind",c.ptm("eventSeparator")),C("data-p",c.dataP),r(),l("ngIf",c.markerTemplate||c._markerTemplate)("ngIfElse",d),r(3),l("ngIf",!a),r(),g(c.cx("eventContent")),l("pBind",c.ptm("eventContent")),C("data-p",c.dataP),r(),l("ngTemplateOutlet",c.contentTemplate||c._contentTemplate)("ngTemplateOutletContext",V(25,ie,t))}}var Le={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},be=(()=>{class e extends L{name="timeline";style=_e;classes=Le;static \u0275fac=(()=>{let t;return function(d){return(t||(t=M(e)))(d||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();var Se=new $("TIMELINE_INSTANCE"),De=(()=>{class e extends Y{bindDirectiveInstance=f(S,{self:!0});$pcTimeline=f(Se,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=f(be);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}get dataP(){return this.cn({[this.layout]:this.layout,[this.align]:this.align})}static \u0275fac=(()=>{let t;return function(d){return(t||(t=M(e)))(d||e)}})();static \u0275cmp=v({type:e,selectors:[["p-timeline"]],contentQueries:function(a,d,c){if(a&1&&de(c,Ne,4)(c,Re,4)(c,$e,4)(c,ue,4),a&2){let T;z(T=N())&&(d.contentTemplate=T.first),z(T=N())&&(d.oppositeTemplate=T.first),z(T=N())&&(d.markerTemplate=T.first),z(T=N())&&(d.templates=T)}},hostVars:3,hostBindings:function(a,d){a&2&&(C("data-p",d.dataP),g(d.cn(d.cx("root"),d.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[H([be,{provide:Se,useExisting:e},{provide:G,useExisting:e}]),A([S]),O],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(a,d){a&1&&u(0,qe,10,27,"div",1),a&2&&l("ngForOf",d.value)},dependencies:[Q,se,fe,ve,q,S],encapsulation:2,changeDetection:0})}return e})();var re=(e,o)=>o.name;function Ge(e,o){e&1&&(n(0,"div",18)(1,"h2",19),p(2,"Resume"),i()())}function Ye(e,o){if(e&1&&m(0,"p-tag",7),e&2){let t=o.$implicit;l("value",t)("rounded",!0)}}function Je(e,o){if(e&1&&(n(0,"div",13),m(1,"img",20),n(2,"span",21),p(3),i()()),e&2){let t=o.$implicit;r(),l("src",t.logoUrl,D)("alt",t.name),r(2),s(t.name)}}function Ke(e,o){if(e&1&&(n(0,"div",13),m(1,"img",20),n(2,"span",21),p(3),i()()),e&2){let t=o.$implicit;r(),l("src",t.logoUrl,D)("alt",t.name),r(2),s(t.name)}}function We(e,o){if(e&1&&(n(0,"div",13),m(1,"img",20),n(2,"span",21),p(3),i()()),e&2){let t=o.$implicit;r(),l("src",t.logoUrl,D)("alt",t.name),r(2),s(t.name)}}function Xe(e,o){if(e&1&&(n(0,"div",22)(1,"div",23)(2,"span",24),p(3),i(),n(4,"span",25),p(5),i()(),n(6,"p",26),p(7),i(),n(8,"p",27),p(9),i()()),e&2){let t=o.$implicit;r(3),s(t.company),r(2),s(t.location),r(2),s(t.dateRange),r(2),s(t.description)}}function Ze(e,o){e&1&&(n(0,"span",28),m(1,"i",29),i())}function et(e,o){if(e&1&&(n(0,"div",22)(1,"div",23)(2,"span",24),p(3),i(),n(4,"span",25),p(5),i()(),n(6,"p",26),p(7),i(),n(8,"p",27),p(9),i()()),e&2){let t=o.$implicit;r(3),s(t.degree),r(2),s(t.institution),r(2),s(t.dateRange),r(2),s(t.description)}}function tt(e,o){e&1&&(n(0,"span",28),m(1,"i",30),i())}var te=class e{profileData=f(E);get headlines(){return[`${this.profileData.getYearsOfExperience()} years experience`,"Master's degree"]}get backendSkills(){return this.profileData.getSkillsByCategory("backend")}get frontendSkills(){return this.profileData.getSkillsByCategory("frontend")}get toolsSkills(){return this.profileData.getSkillsByCategory("tools")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-resume-card"]],decls:53,vars:4,consts:[["header",""],["content",""],["marker",""],["appFadeIn","",3,"fadeDelay"],["styleClass","h-full"],[1,"space-y-6"],[1,"flex","flex-wrap","gap-2"],["severity","secondary",3,"value","rounded"],[1,"text-muted-color","leading-relaxed"],[1,"text-lg","font-semibold","text-color","mb-4"],[1,"space-y-4"],[1,"text-sm","font-medium","text-muted-color","mb-2"],["appStaggerChildren","",1,"flex","flex-wrap","gap-3"],["appHoverScale","",1,"flex","items-center","gap-2","px-3","py-2","rounded-lg","bg-surface-50","dark:bg-surface-800"],[1,"text-lg","font-semibold","text-color","mb-4","flex","items-center","gap-2"],[1,"pi","pi-briefcase"],["align","left",3,"value"],[1,"pi","pi-graduation-cap"],[1,"p-4","pb-0"],[1,"text-xl","font-bold","text-color","font-mono"],[1,"w-6","h-6",3,"src","alt"],[1,"text-sm","text-color"],[1,"mb-6"],[1,"flex","flex-col","md:flex-row","md:items-center","gap-1","md:gap-3","mb-2"],[1,"font-semibold","text-color"],[1,"text-muted-color","text-sm"],[1,"text-sm","text-muted-color"],[1,"text-muted-color","mt-2","text-sm","leading-relaxed"],[1,"flex","items-center","justify-center","w-8","h-8","rounded-full","bg-primary","text-primary-contrast"],[1,"pi","pi-briefcase","text-sm"],[1,"pi","pi-graduation-cap","text-sm"]],template:function(t,a){t&1&&(n(0,"div",3)(1,"p-card",4),u(2,Ge,3,0,"ng-template",null,0,y),n(4,"div",5)(5,"div",6),x(6,Ye,1,2,"p-tag",7,F),i(),n(8,"p",8),p(9),i(),m(10,"p-divider"),n(11,"div")(12,"h3",9),p(13,"Skills"),i(),n(14,"div",10)(15,"div")(16,"h4",11),p(17,"Backend"),i(),n(18,"div",12),x(19,Je,4,3,"div",13,re),i()(),n(21,"div")(22,"h4",11),p(23,"Frontend"),i(),n(24,"div",12),x(25,Ke,4,3,"div",13,re),i()(),n(27,"div")(28,"h4",11),p(29,"Tools"),i(),n(30,"div",12),x(31,We,4,3,"div",13,re),i()()()(),m(33,"p-divider"),n(34,"div")(35,"h3",14),m(36,"i",15),p(37," Experience "),i(),n(38,"p-timeline",16),u(39,Xe,10,4,"ng-template",null,1,y)(41,Ze,2,0,"ng-template",null,2,y),i()(),m(43,"p-divider"),n(44,"div")(45,"h3",14),m(46,"i",17),p(47," Education "),i(),n(48,"p-timeline",16),u(49,et,10,4,"ng-template",null,1,y)(51,tt,2,0,"ng-template",null,2,y),i()()()()()),t&2&&(l("fadeDelay",.2),r(6),h(a.headlines),r(3),b(" ",a.profileData.resumeIntro," "),r(10),h(a.backendSkills),r(6),h(a.frontendSkills),r(6),h(a.toolsSkills),r(7),l("value",a.profileData.experiences),r(10),l("value",a.profileData.education))},dependencies:[k,j,Z,De,I,J,K],encapsulation:2,changeDetection:0})};var nt=(e,o)=>o.id;function it(e,o){e&1&&(n(0,"div",7)(1,"h2",8),p(2,"Side Projects"),i()())}function rt(e,o){e&1&&m(0,"p-tag",13),e&2&&l("rounded",!0)}function ot(e,o){if(e&1&&(n(0,"li",16),m(1,"i",20),p(2),i()),e&2){let t=o.$implicit;r(2),b(" ",t," ")}}function at(e,o){if(e&1&&m(0,"p-tag",21),e&2){let t=o.$implicit;l("value",t)("rounded",!0)}}function lt(e,o){if(e&1&&(n(0,"div",17),x(1,at,1,2,"p-tag",21,F),i()),e&2){let t=_().$implicit;r(),h(t.stack)}}function pt(e,o){if(e&1&&(n(0,"a",19),m(1,"p-button",22),i()),e&2){let t=_().$implicit;l("href",t.githubUrl,D),r(),l("text",!0)}}function dt(e,o){if(e&1&&(n(0,"a",19),m(1,"p-button",23),i()),e&2){let t=_().$implicit;l("href",t.liveUrl,D),r(),l("text",!0)}}function mt(e,o){if(e&1&&(n(0,"div",6)(1,"div",9)(2,"div",10)(3,"div",11)(4,"h3",12),p(5),i(),P(6,rt,1,1,"p-tag",13),i(),n(7,"p",14),p(8),i(),n(9,"ul",15),x(10,ot,3,1,"li",16,F),i(),P(12,lt,3,0,"div",17),i()(),n(13,"div",18),P(14,pt,2,2,"a",19),P(15,dt,2,2,"a",19),i()()),e&2){let t=o.$implicit;r(5),s(t.title),r(),B(t.status==="coming-soon"?6:-1),r(2),s(t.summary),r(2),h(t.features),r(2),B(t.stack?12:-1),r(2),B(t.githubUrl?14:-1),r(),B(t.liveUrl?15:-1)}}var ne=class e{profileData=f(E);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-side-projects-card"]],decls:10,vars:2,consts:[["header",""],["appFadeIn","",3,"fadeDelay"],["styleClass","h-full"],[1,"space-y-4"],[1,"text-muted-color"],[1,"grid","grid-cols-1","gap-4"],["appHoverScale","",1,"p-4","rounded-xl","border","border-surface","bg-surface-50","dark:bg-surface-800","hover:border-primary","transition-all"],[1,"p-4","pb-0"],[1,"text-xl","font-bold","text-color","font-mono"],[1,"flex","items-start","justify-between","gap-4"],[1,"flex-1"],[1,"flex","items-center","gap-2","mb-2"],[1,"font-semibold","text-color"],["value","Coming Soon","severity","warn",3,"rounded"],[1,"text-muted-color","text-sm","mb-3"],[1,"space-y-1","mb-3"],[1,"text-sm","text-muted-color","flex","items-center","gap-2"],[1,"flex","flex-wrap","gap-1","mb-3"],[1,"flex","items-center","gap-2","pt-2","border-t","border-surface"],["target","_blank","rel","noopener noreferrer",3,"href"],[1,"pi","pi-arrow-right","text-primary","text-xs"],["severity","secondary",3,"value","rounded"],["label","GitHub","icon","pi pi-github","severity","secondary","size","small",3,"text"],["label","Live Demo","icon","pi pi-external-link","iconPos","right","size","small",3,"text"]],template:function(t,a){t&1&&(n(0,"div",1)(1,"p-card",2),u(2,it,3,0,"ng-template",null,0,y),n(4,"div",3)(5,"p",4),p(6),i(),n(7,"div",5),x(8,mt,16,6,"div",6,nt),i()()()()),t&2&&(l("fadeDelay",.3),r(6),b(" ",a.profileData.sideProjectsIntro," "),r(2),h(a.profileData.projects))},dependencies:[k,j,xe,I,K],encapsulation:2,changeDetection:0})};var Te=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=v({type:e,selectors:[["app-home"]],decls:7,vars:0,consts:[[1,"grid","grid-cols-1","lg:grid-cols-3","gap-6"],[1,"lg:col-span-1"],[1,"lg:col-span-2","space-y-6"]],template:function(t,a){t&1&&(n(0,"div",0)(1,"div",1),m(2,"app-profile-card"),i(),n(3,"div",2),m(4,"app-about-card")(5,"app-resume-card")(6,"app-side-projects-card"),i()())},dependencies:[W,ee,te,ne],encapsulation:2,changeDetection:0})};export{Te as HomeComponent};
