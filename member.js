function skillsMember(){
    return{
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'SkillsmemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}